import { Sidebar, Posts } from '@/components'
import { useBem } from '@/hooks'
import { SearchBox } from './search-box'

import './main.scss'
import { useState } from 'react'
import { Category } from '@/types'

export const Main = () => {
  const bem = useBem('main')

  const [category, setCategory] = useState<Category>()

  const [search, setSearch] = useState('')

  const onCategoryChange = (item: Category) => {
    setCategory(item)
  }

  const handleSearch = (text: string) => {
    setSearch(text)
  }

  return (
    <>
      <h2 className={bem.e('title')}>Hỗ trợ sử dụng phần mềm</h2>
      <main className={bem.b()}>
        <Sidebar onCategoryChange={onCategoryChange} />

        <div className={bem.e('content')}>
          <SearchBox search={search} onSearch={handleSearch} />

          <Posts search={search} category={category} />
        </div>
      </main>
    </>
  )
}
