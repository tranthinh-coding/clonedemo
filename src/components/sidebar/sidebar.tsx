import { useBem } from '@/hooks'
import { CateforyServices } from '@/services'
import { Category } from '@/types'
import { useEffect, useState } from 'react'
import { SidebarItem } from './sidebar-item'

import './sidebar.scss'

type SidebarProps = {
  onCategoryChange: (e: Category) => void
}

export const Sidebar = ({ onCategoryChange }: SidebarProps) => {
  const bem = useBem('sidebar')

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await CateforyServices.get()

      setCategories(res)
    })()
  }, [])

  return (
    <div className={bem.b()}>
      <h3 className={bem.e('title')}>Danh mục tài liệu</h3>

      {categories.map((e) => (
        <SidebarItem
          key={e.id}
          id={e.id}
          name={e.name}
          onClick={() => onCategoryChange(e)}
        />
      ))}
    </div>
  )
}
