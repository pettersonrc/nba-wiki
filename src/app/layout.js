import Rodape from "@/components/Rodape";
import "./globals.css";
import Topo from "@/components/Topo";

export const metadata = {
    title: "NBAwiki",
    description: "Informações sobre as lendas da NBA",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>
                <Topo />
                {children}
                <Rodape />
            </body>
        </html>
    );
}
