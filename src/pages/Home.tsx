import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Searchbar } from "../components/Searchbar";
import { PackageCard } from "../components/PackageCard";

export const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const mockCountrySuggestions = [
        "Bhutan",
        "India",
        "Germany",
        "Norway",
        "Vietnam",
        "Turkey"
    ];

    const mockCountryCodes: Record<string, string> = {
        Bhutan: "bt",
        India: "in",
        Germany: "de",
        Norway: "no",
        Vietnam: "vn",
        Turkey: "tr"
    };

    const mockPackages = [
        {
            id: 1,
            title: "Explore Bhutan",
            description: "Experience the serene mountains and unique culture.",
            imageUrl: "https://source.unsplash.com/random/400x300?bhutan",
        },
        {
            id: 2,
            title: "Discover India",
            description: "A vibrant country full of colors, spices and traditions.",
            imageUrl: "https://source.unsplash.com/random/400x300?india",
        },
        {
            id: 3,
            title: "Germany Highlights",
            description: "Castles, beer, and the scenic countryside.",
            imageUrl: "https://source.unsplash.com/random/400x300?germany",
        },
        {
            id: 4,
            title: "Norway Fjords",
            description: "Majestic fjords and northern lights adventures.",
            imageUrl: "https://source.unsplash.com/random/400x300?norway",
        },
        {
            id: 5,
            title: "Norway Fjords",
            description: "Majestic fjords and northern lights adventures.",
            imageUrl: "https://source.unsplash.com/random/400x300?norway",
        }
    ];


    return (
        <Box
            component="div"
            sx={{
                minHeight: "100vh",
            }}
        >
            <Box
                component="div"
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
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: {
                            xs: "2rem",
                            sm: "2.5rem",
                            md: "3rem",
                            lg: "3.5rem"
                        },
                        color: "#ffffff"
                    }}
                >
                    Anywhere
                </Typography>

                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        mt: 1,
                        fontSize: {
                            xs: "0.75rem",
                            sm: "0.875rem",
                            md: "1rem",
                        },
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
                />

            </Box>

            <Box>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        px: { xs: 3, sm: 4, md: 5 },
                        py: { xs: 3, sm: 4, md: 5 },
                        fontSize: {
                            xs: "1.25rem",
                            sm: "1.5rem",
                            md: "1.75rem"
                        },
                        color: "#000000"
                    }}
                >
                    Packages For You
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridAutoFlow: "column",
                    gridAutoColumns: {
                        xs: "80%",
                        sm: "50%",
                        md: "33.33%",
                        lg: "25%",
                    },
                    gap: 2,
                    overflowX: "auto",
                    px: { xs: 3, sm: 4, md: 5 },
                    pb: 4,
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            >
                {mockPackages.map(pkg => (
                    <PackageCard
                        key={pkg.id}
                        title={pkg.title}
                        description={pkg.description}
                        imageUrl={pkg.imageUrl}
                    />
                ))}
            </Box>

        </Box>
    );
};
