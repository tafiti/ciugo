import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Gũthaaka" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Geria gwĩcirĩria kiugo gia ndemwa ithaano. Othutha wa igeria, rangi wa mbũgũ nĩũgũcenjia ũkũonererie njĩra. Wĩna mĩeke ĩtandatũ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="correct"
        />
        <Cell value="B" />
        <Cell value="Ũ" />
        <Cell value="R" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ndemwa ya 'M' ĩ kiugoinĩ na ĩ harĩa yagĩrĩire.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" />
        <Cell value="J" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="present"
        />
        <Cell value="R" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ndemwa ya 'I' ĩ kiugoinĩ no ndĩrĩ harĩa yagĩrĩire.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="B" />
        <Cell value="U" />
        <Cell isRevealing={true} isCompleted={true} value="G" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ndemwa ya 'G' ndĩrĩ kiugoinĩ.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Ramata gĩũthi gĩkĩ -{' '}
        <a
          href="https://github.com/tafiti/ciugo"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
