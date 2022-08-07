import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components'
import Footer from './components/Footer';
import Item from './components/Item';
import SearchBar from './components/SearchBar';
import ItemRichDescription from './components/ItemRichDescription';

import jobs from './data/jobs'
import products from './data/products'
import services from './data/services'

const AppStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  height: 100vh;
  padding: 10px;

  overflow-y: hidden;

  * {
    box-sizing: border-box;
  }

  > :not(:first-child) {
    margin-top: 10px;
  }
`

const ScrollableWrapper = styled.div`
  box-sizing: border-box;

  height: 100%;
  width: 100%;

  overflow-y: auto;

  >:not(:first-child) {
    margin-top: 10px;
  }
`

const TABS = {
  'PRODUCTS': 0,
  'SERVICES': 1,
  'JOBS': 2,
}

const PLACEHOLDERS = {
  [TABS.PRODUCTS]: 'Procure um produto',
  [TABS.SERVICES]: 'Procure um serviço',
  [TABS.JOBS]: 'Procure uma vaga',
}

const TAB_NAMES = {
  [TABS.PRODUCTS]: 'Produtos',
  [TABS.SERVICES]: 'Serviços',
  [TABS.JOBS]: 'Vagas',
}

const DATA = {
  [TABS.PRODUCTS]: products,
  [TABS.SERVICES]: services,
  [TABS.JOBS]: jobs,
}

const App = () => {
  const [currentSearch, setCurrentSearch] = useState('')
  const [currentTab, setCurrentTab] = useState(TABS.PRODUCTS)
  const [currentSelectedItem, setCurrentSelectedItem] = useState(false)

  const currentData = useMemo(() => DATA[currentTab], [currentTab])

  const currentFilteredData = useMemo(
    () => currentSearch.length
      ? currentData.filter(({ title }) => title.toLowerCase().includes(currentSearch.toLowerCase()))
      : currentData,
    [currentData, currentSearch]
  )

  const tabPlaceHolder = useMemo(() => PLACEHOLDERS[currentTab], [currentTab])

  useEffect(() => {
    if (currentSearch.length) setCurrentSearch('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab])

  const handleSearchBarOnChange = (e) => {
    setCurrentSearch(e.target.value)
  }

  return (
    <>
      {
        currentSelectedItem &&
        <ItemRichDescription
          item={currentSelectedItem}
          onClose={() => setCurrentSelectedItem(null)}
        />
      }
      <AppStyled>
        <SearchBar
          value={currentSearch}
          placeholder={tabPlaceHolder}
          onChange={handleSearchBarOnChange}
        />
        <ScrollableWrapper>
          {
            currentFilteredData.map((item) => {
              const { id, src, title, description, price } = item

              return (
                <Item
                  key={id}
                  src={src}
                  title={title}
                  description={description}
                  price={price}
                  onClick={() => setCurrentSelectedItem(item)}
                />
              )
            })
          }
        </ScrollableWrapper>
        <Footer
          options={
            Object
              .values(TABS)
              .map(key => TAB_NAMES[key])
          }
          selected={currentTab}
          onTabClick={setCurrentTab}
        />
      </AppStyled>
    </>
  )
}

export default App;
