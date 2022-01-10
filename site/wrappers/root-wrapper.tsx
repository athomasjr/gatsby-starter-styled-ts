import { WrapPageElementBrowserArgs } from 'gatsby'
import React from 'react'
import GlobalStyles from '../../src/styles/global-styles'

const RootWrapper = ({ element }: WrapPageElementBrowserArgs) => (
  <>
    <GlobalStyles />
    {element}
  </>
)

export default RootWrapper
