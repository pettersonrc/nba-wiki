import "./globals.css";

export const metadata = {
    title: "NBAwiki",
    description: "Informações sobre as lendas da NBA",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
