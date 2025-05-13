import "./globals.css";
import Topo from "@/components/Topo";

export const metadata = {
    title: "NBAwiki",
    description: "Informações sobre as lendas da NBA",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>
                <Topo />
                {children}
            </body>
        </html>
    );
}
