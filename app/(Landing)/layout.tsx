import Navbar from "../../components/Navbar";
import type { Metadata } from 'next'

export const metadata: Metadata = {
        /* eslint-disable-next-line react/no-unescaped-entities */
    title: 'Aidan O\'Connor',
     /* eslint-disable-next-line react/no-unescaped-entities */
    description: 'Aidan O\'Connor is a full stack web developer based in Bristol, UK.',

}

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    )
}
export default Layout;

