import * as React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { Searchbar } from "../components/Searchbar";
import { PackageCard } from "../components/PackageCard";
import HeroSectionBgImage from "../assets/hero-section-bg.jpg";

export const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [packages, setPackages] = React.useState<typeof mockPackages>([]);
    const [isSearchMode, setIsSearchMode] = React.useState(false);

    const mockCountrySuggestions = ["Bhutan", "Vietnam"];
    const mockCountryCodes: Record<string, string> = { Bhutan: "bt", Vietnam: "vn" };

    const mockPackages = [
        {
            id: 1,
            title: "Bhutan Highlights – 4 Days",
            description: "Short escape to the Land of the Thunder Dragon. Explore Thimphu and Paro, visit ancient monasteries, and enjoy the peaceful Himalayan atmosphere.",
            imageUrl: "https://i.ytimg.com/vi/esddmLk4feI/maxresdefault.jpg",
        },
        {
            id: 2,
            title: "Cultural Bhutan Journey – 6 Days",
            description: "A cultural journey through Bhutan. Discover Thimphu, Punakha Dzong, Dochula Pass, and the stunning valleys of Paro with a perfect mix of history and nature.",
            imageUrl: "https://www.regent-holidays.co.uk/upload-files/blog-sections/section-89_1081.jpg",
        },
        {
            id: 3,
            title: "Luxury Escape in Bhutan – 7 Days",
            description: "Stay in premium resorts while enjoying curated experiences — from wellness retreats in Paro to private tours of Thimphu and Punakha’s breathtaking landscapes.",
            imageUrl: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2FBuddha%20Point%20-%20Thimphu%201.jpg&w=1920&q=90",
        },
    ];

    React.useEffect(() => {
        setPackages(mockPackages);
    }, []);

    React.useEffect(() => {
        if (!searchQuery.trim()) {
            setIsSearchMode(false);
            setPackages(mockPackages);
        }
    }, [searchQuery]);

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setIsSearchMode(false);
            setPackages(mockPackages);
            return;
        }

        setLoading(true);
        setIsSearchMode(true);
        setPackages([]);

        setTimeout(() => {
            const filtered = mockPackages.filter(pkg =>
                pkg.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setPackages(filtered);
            setLoading(false);
        }, 1500);
    };

    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Box
                sx={{
                    position: "relative",
                    height: { xs: 225, sm: 275 },
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundImage: `url(${HeroSectionBgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.4)",
                    }}
                />
                <Typography
                    variant="h2"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
                        color: "#ffffff",
                    }}
                >
                    anywhere.trips
                </Typography>
                <Typography
                    sx={{
                        mt: 1,
                        position: "relative",
                        zIndex: 1,
                        fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                        color: "#ffffff",
                    }}
                >
                    Go Anywhere. Feel Everything
                </Typography>

                <Searchbar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    countrySuggestions={mockCountrySuggestions}
                    countryCodes={mockCountryCodes}
                    onSearch={handleSearch}
                />
            </Box>

            <Box>
                {loading ? (
                    <Skeleton
                        variant="text"
                        height={40}
                        sx={{
                            width: {
                                xs: "80%",
                                sm: "70%",
                                md: "60%",
                                lg: "50%",
                            },
                            mx: { xs: 3, sm: 4, md: 5 },
                            my: { xs: 3, sm: 4, md: 5 },
                            borderRadius: 0,
                        }}
                    />
                ) : (
                    packages.length > 0 && (
                        <Typography
                            variant="h5"
                            sx={{
                                px: { xs: 3, sm: 4, md: 5 },
                                py: { xs: 3, sm: 4, md: 5 },
                                fontSize: { xs: "1rem", sm: "1.4rem", md: "1.65rem" },
                                color: "#000000",
                            }}
                        >
                            Discover Bhutan: Curated Travel Packages
                        </Typography>
                    )
                )}
            </Box>

            {!loading && packages.length === 0 && (
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "calc(100vh - 275px)",
                        px: { xs: 3, sm: 4, md: 5 },
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "text.secondary",
                            fontWeight: 500,
                            fontSize: {
                                xs: "1rem",
                                sm: "1.25rem",
                                md: "1.35rem",
                                lg: "1.65rem"
                            }
                        }}
                    >
                        We couldn’t find what you’re looking for — but adventure awaits elsewhere!
                    </Typography>
                </Box>
            )}

            <Box
                sx={{
                    display: "grid",
                    gridAutoFlow: "column",
                    gridAutoColumns: { xs: "80%", sm: "50%", md: "33.33%", lg: "25%" },
                    gap: { xs: 3, sm: 4, md: 5 },
                    overflowX: "auto",
                    px: { xs: 3, sm: 4, md: 5 },
                    pb: 4,
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {loading ? (
                    Array.from(new Array(4)).map((_, idx) => (
                        <Box key={idx} sx={{ minHeight: 250 }}>
                            <Skeleton variant="rectangular" height={140} sx={{ borderRadius: 0 }} />
                            <Skeleton variant="text" height={30} sx={{ mt: 1, borderRadius: 0 }} />
                            <Skeleton variant="text" height={75} sx={{ borderRadius: 0 }} />
                            <Skeleton variant="rectangular" height={40} sx={{ mt: 2, borderRadius: 0 }} />
                        </Box>
                    ))
                ) : packages.length > 0 ? (
                    packages.map(pkg => (
                        <PackageCard
                            key={pkg.id}
                            id={pkg.id}
                            title={pkg.title}
                            description={pkg.description}
                            imageUrl={pkg.imageUrl}
                        />
                    ))
                ) : null}
            </Box>

            {!loading && !isSearchMode && (
                <Box
                    sx={{
                        backgroundColor: "#ffffff",
                        my: { xs: 3.5, sm: 5.5, md: 7.5 },
                        py: { xs: 6, sm: 8, md: 10 },
                        px: { xs: 3, sm: 6, md: 10 },
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: "1.45rem", sm: "1.95rem", md: "2.2rem" },
                            color: "#00ad83",
                        }}
                    >
                        Travel Made Simple
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 600,
                            mx: "auto",
                            fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
                            color: "#333",
                        }}
                    >
                        Share your travel plans with us, get a quick personalized quote, &amp; let us take care of everything from bookings to experiences.
                    </Typography>
                </Box>
            )}

        </Box>
    );
};
