import { useBem } from '@/hooks'

type SidebarItemProps = {
  id: number
  name: string
} & { onClick: () => void }

export const SidebarItem = ({ name, onClick }: SidebarItemProps) => {
  const bem = useBem('sidebar')

  return <div onClick={onClick} className={bem.e('item')}>{name}</div>
}
