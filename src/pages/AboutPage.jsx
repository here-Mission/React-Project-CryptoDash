import { Link } from "react-router";

const AboutPage = () => {
    return (
        <div className="about p-8 bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen text-white flex flex-col items-center">
            
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">Welcome to CryptoDash Project 🚀</h1>
            
            {/* Fun tagline */}
            <p className="text-lg mb-6 text-center">
                Your ultimate crypto companion! Track, analyze, and stay ahead in the world of digital assets 💎✨
            </p>

            {/* Cool features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    💹 <strong>Real-time Prices</strong>
                    <p>Get live updates on your favorite cryptocurrencies.</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    📊 <strong>Smart Charts</strong>
                    <p>Analyze trends and make informed decisions with interactive charts.</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    🔔 <strong>Alerts & Notifications</strong>
                    <p>Never miss a market move with custom alerts.</p>
                </div>
            </div>

            {/* Navigation link */}
            <Link
                to="/dashboard"
                className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors"
            >
                Go to Dashboard
            </Link>

            {/* Footer fun element */}
            <p className="mt-10 text-sm opacity-80">
                Made with ❤️ by Crypto enthusiasts | Keep HODLing! 🚀
            </p>
        </div>
    );
}

export default AboutPage;
