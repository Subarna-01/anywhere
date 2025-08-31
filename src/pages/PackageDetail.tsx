import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const mockPackages = [
    {
        id: 1,
        title: "Bhutan Highlights – 4 Days",
        description: "Short escape to the Land of the Thunder Dragon. Explore Thimphu and Paro, visit ancient monasteries, and enjoy the peaceful Himalayan atmosphere.",
        imageUrl: "https://i.ytimg.com/vi/esddmLk4feI/maxresdefault.jpg",
        itinerary: [
            "Day 1: Arrival in Thimphu",
            "Day 2: Explore Thimphu city",
            "Day 3: Paro sightseeing",
            "Day 4: Departure"
        ],
    },
    {
        id: 2,
        title: "Cultural Bhutan Journey – 6 Days",
        description: "A cultural journey through Bhutan. Discover Thimphu, Punakha Dzong, Dochula Pass, and the stunning valleys of Paro with a perfect mix of history and nature.",
        imageUrl: "https://www.regent-holidays.co.uk/upload-files/blog-sections/section-89_1081.jpg",
        itinerary: [
            "Day 1: Arrive in Thimphu",
            "Day 2: Dochula Pass & Punakha Dzong",
            "Day 3: Punakha Valley",
            "Day 4: Paro town",
            "Day 5: Tiger’s Nest Monastery",
            "Day 6: Departure"
        ],
    },
];

export const PackageDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const pkg = mockPackages.find(p => p.id.toString() === id);

    if (!pkg) {
        return <Typography variant="h6">Package not found</Typography>;
    }

    return (
        <Box>
            <Box
                sx={{
                    height: { xs: 250, sm: 350, md: 350 },
                    position: "relative",
                    backgroundImage: `url(${pkg.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.2)"
                    }}
                />
                <IconButton
                    sx={{
                        position: "absolute",
                        top: 25,
                        left: 25,
                        color: "#ffffff",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.7)"
                        }
                    }}
                    onClick={() => navigate(-1)}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Box>

            <Box
                sx={{
                    px: {
                        xs: 3,
                        sm: 4,
                        md: 5
                    },
                    py: {
                        xs: 3,
                        sm: 4,
                        md: 5
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 2,
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5" },
                        color: "#000000"
                    }}
                >
                    {pkg.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        fontSize: {
                            xs: "0.9rem",
                            sm: "1rem",
                            md: "1.1rem"
                        },
                        color: "text.secondary"
                    }}
                >
                    {pkg.description}
                </Typography>

                <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                    Itinerary
                </Typography>
                <Box
                    component="ul"
                    sx={{ pl: 3.5 }}
                >
                    {pkg.itinerary.map((day, idx) => (
                        <li key={idx}>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                {day}
                            </Typography>
                        </li>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
