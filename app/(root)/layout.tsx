
import Header from "@/components/Headers";

const Layout = async ({ children }: { children : React.ReactNode }) => {
    // const session = await auth.api.getSession({ headers: await headers() });

    return (
        <html lang="en">
        <body>
        <main className="min-h-screen text-gray-400">
            <Header />
            <div className="container py-10">
                {children}
            </div>
        </main>

        </body>
        </html>
    )
}
export default Layout