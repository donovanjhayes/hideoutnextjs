import Layout from './layout'

import type { ReactElement } from 'react'

// import NestedLayout from '../components/nested-layout'
// import type { NextPageWithLayout } from './_app'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world why not</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/*<NestedLayout>{page}</NestedLayout>*/}
     {page}
    </Layout>
  )
}
 
export default Page