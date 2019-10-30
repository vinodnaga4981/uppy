import { expectType, expectError } from 'tsd'
import Uppy = require('@uppy/core')
import Dashboard = require('../')

{
  const uppy = Uppy<Uppy.StrictTypes>()
  uppy.use(Dashboard, {
    target: 'body'
  })

  const plugin = uppy.getPlugin('Dashboard') as Dashboard
  plugin.openModal()
  expectType<boolean>(plugin.isModalOpen())
  plugin.closeModal()
}

{
  const uppy = Uppy<Uppy.StrictTypes>()
  uppy.use(Dashboard, {
    width: '100%',
    height: 700,
    metaFields: [
      { id: 'caption', name: 'Caption' },
      {
        id: 'license',
        name: 'License',
        placeholder: 'Creative Commons, Apache 2.0, ...'
      }
    ]
  })
}

{
  const uppy = Uppy<Uppy.StrictTypes>()
  expectError(uppy.use(Dashboard, { height: {} }))
}