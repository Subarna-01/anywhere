import * as React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

export const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#f9fafb",
                color: "#111827",
                mt: 8,
                pt: 6,
                pb: 3,
                px: { xs: 3, sm: 6, md: 10 },
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "2fr 1fr 1fr 1fr",
                    },
                    gap: { xs: 4, sm: 6, md: 8 },
                }}
            >
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: "#00ad83",
                            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                        }}
                    >
                        Anywhere
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#4b5563",
                            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                        }}
                    >
                        Go Anywhere. Feel Everything. Explore curated travel experiences
                        across the globe.
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "#111827",
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        }}
                    >
                        Quick Links
                    </Typography>
                    {["Home", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            underline="none"
                            sx={{
                                display: "block",
                                color: "#4b5563",
                                mb: 0.5,
                                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                                "&:hover": { color: "#00ad83" },
                            }}
                        >
                            {item}
                        </Link>
                    ))}
                </Box>

                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "#111827",
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        }}
                    >
                        Support
                    </Typography>
                    {["FAQs", "Help Center", "Terms of Service", "Privacy Policy"].map(
                        (item) => (
                            <Link
                                key={item}
                                href="#"
                                underline="none"
                                sx={{
                                    display: "block",
                                    color: "#4b5563",
                                    mb: 0.5,
                                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                                    "&:hover": { color: "#00ad83" },
                                }}
                            >
                                {item}
                            </Link>
                        )
                    )}
                </Box>

                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "#111827",
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        }}
                    >
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton
                            sx={{ color: "#4b5563", "&:hover": { color: "#00ad83" } }}
                        >
                            <Facebook />
                        </IconButton>
                        {/* <IconButton
                            sx={{ color: "#4b5563", "&:hover": { color: "#00ad83" } }}
                        >
                            <Twitter />
                        </IconButton> */}
                        <IconButton
                            sx={{ color: "#4b5563", "&:hover": { color: "#00ad83" } }}
                        >
                            <Instagram />
                        </IconButton>
                        {/* <IconButton
                            sx={{ color: "#4b5563", "&:hover": { color: "#00ad83" } }}
                        >
                            <YouTube />
                        </IconButton> */}
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    borderTop: "1px solid #e5e7eb",
                    mt: 4,
                    pt: 2,
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: "#6b7280",
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                    }}
                >
                    © {new Date().getFullYear()} Anywhere Travel. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};
