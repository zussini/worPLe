import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Jak grać" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Zgadnij prawidłowe słowo w 6 podejściach. Po każdym strzale kolor płytek zmieni się ujawniając jak blisko byłaś/eś prawidłowej odpowiedzi.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="Ż" />
        <Cell value="Y" />
        <Cell value="Ć" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Litera W znajduje się w słowie i jest w prawidłowym miejscu.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Litera L znajduje się w szukanym słowie w innej pozycji.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Z" />
        <Cell value="A" />
        <Cell value="Ł" />
        <Cell isRevealing={true} isCompleted={true} value="Ó" status="absent" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Litera Ó nie znajduje się w szukanym słowie.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        To jest wersja open-source gry słownej, którą wszyscy znamy i kochamy -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Sprawdź kod tutaj
        </a>{' '}
      </p>
    </BaseModal>
  )
}
