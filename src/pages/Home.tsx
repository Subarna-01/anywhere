import * as React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { Searchbar } from "../components/Searchbar";
import { PackageCard } from "../components/PackageCard";

export const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [packages, setPackages] = React.useState<typeof mockPackages>([]);

    const mockCountrySuggestions = ["Bhutan", "Vietnam"];
    const mockCountryCodes: Record<string, string> = { Bhutan: "bt", Vietnam: "vn" };

    const mockPackages = [
        {
            id: 1,
            title: "Bhutan: 3 Nights / 4 Days",
            description: "Short escape to the Land of the Thunder Dragon. Explore Thimphu and Paro, visit ancient monasteries, and enjoy the peaceful Himalayan atmosphere.",
            imageUrl: "https://i.ytimg.com/vi/esddmLk4feI/maxresdefault.jpg",
        },
        {
            id: 2,
            title: "Bhutan: 5 Nights / 6 Days",
            description: "A cultural journey through Bhutan. Discover Thimphu, Punakha Dzong, Dochula Pass, and the stunning valleys of Paro with a perfect mix of history and nature.",
            imageUrl: "https://www.regent-holidays.co.uk/upload-files/blog-sections/section-89_1081.jpg",
        },
        {
            id: 3,
            title: "Bhutan Luxury Escape: 6 Nights / 7 Days",
            description: "Stay in premium resorts while enjoying curated experiences — from wellness retreats in Paro to private tours of Thimphu and Punakha’s breathtaking landscapes.",
            imageUrl: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2FBuddha%20Point%20-%20Thimphu%201.jpg&w=1920&q=90",
        },
    ];


    React.useEffect(() => {
        setPackages(mockPackages);
    }, []);

    const handleSearch = () => {
        if (!searchQuery || searchQuery == "") return;

        setLoading(true);
        setPackages([]);

        setTimeout(() => {
            if (!searchQuery.trim()) {
                setPackages(mockPackages);
            } else {
                const filtered = mockPackages.filter(pkg =>
                    pkg.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setPackages(filtered);
            }
            setLoading(false);
        }, 1500);
    };


    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Box
                sx={{
                    height: { xs: 225, sm: 275 },
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "#00ad83"
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
                        color: "#ffffff"
                    }}
                >
                    Anywhere
                </Typography>
                <Typography
                    sx={{
                        mt: 1,
                        fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                        color: "#ffffff"
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
                            borderRadius: 0
                        }}
                    />
                ) : (
                    packages.length > 0 && (
                        <Typography
                            variant="h5"
                            sx={{
                                px: { xs: 3, sm: 4, md: 5 },
                                py: { xs: 3, sm: 4, md: 5 },
                                fontSize: { xs: "1.15rem", sm: "1.4rem", md: "1.65rem" },
                                color: "#000000"
                            }}
                        >
                            Discover Bhutan: Curated Travel Packages
                        </Typography>
                    )
                )}
            </Box>

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
                            title={pkg.title}
                            description={pkg.description}
                            imageUrl={pkg.imageUrl}
                        />
                    ))
                ) : (
                    !loading && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: 200,
                                px: { xs: 3, sm: 4, md: 5 }

                            }}
                        >
                            <Typography variant="body1" color="text.secondary">
                                No results found
                            </Typography>
                        </Box>
                    )
                )}
            </Box>
        </Box>
    );
};
