import { useBem } from '@/hooks'

import './search.scss'

type SearchBoxProps = {
  search: string
  onSearch: (text: string) => void
}

export const SearchBox = ({ search, onSearch }: SearchBoxProps) => {
  const bem = useBem('search')

  return (
    <div className={bem.b()}>
      <input
        type='text'
        value={search}
        placeholder='Nhập từ khoá tìm kiếm'
        className={bem.e('input')}
        onChange={(e) => onSearch(e.target.value)}
      />

      <button className={bem.e('button')}>Search</button>
    </div>
  )
}
