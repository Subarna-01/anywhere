import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Searchbar } from "../components/Searchbar";

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
                            xs: "1rem",
                            sm: "1.125rem",
                            md: "1.25rem",
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
        </Box>
    );
};
