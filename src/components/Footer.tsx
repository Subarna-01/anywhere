import * as React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export const Footer: React.FC = () => {
    const quickLinkPages: Array<string> = ["Home", "About", "Contact"];
    const supportLinkPages: Array<string> = ["FAQs", "Help Center", "Terms of Service", "Privacy Policy"];

    return (
        <Box
            component="footer"
            sx={{
                px: {
                    xs: 3,
                    sm: 6,
                    md: 10
                },
                pt: 6,
                pb: 3,
                mt: 8,
                color: "#111827",
                backgroundColor: "#f9fafb"
            }}
        >
            <Box
                sx={{
                    gap: {
                        xs: 4,
                        sm: 6,
                        md: 8
                    },
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "2fr 1fr 1fr 1fr"
                    }
                }}
            >
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 1,
                            fontWeight: 700,
                            fontSize: {
                                xs: "1.25rem",
                                sm: "1.5rem",
                                md: "1.75rem"
                            },
                            color: "#00ad83"
                        }}
                    >
                        anywhere.trips
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: {
                                xs: "0.75rem",
                                sm: "0.875rem",
                                md: "1rem"
                            },
                            color: "#4b5563"
                        }}
                    >
                        Explore curated travel experiences
                        across the globe.
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.1rem"
                            },
                            color: "#111827"
                        }}
                    >
                        Quick Links
                    </Typography>
                    {quickLinkPages.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            sx={{
                                mb: 0.5,
                                display: "block",
                                fontSize: {
                                    xs: "0.75rem",
                                    sm: "0.875rem",
                                    md: "1rem"
                                },
                                color: "#4b5563",
                                "&:hover": {
                                    color: "#00ad83"
                                }
                            }}
                            underline="none"
                        >
                            {item}
                        </Link>
                    ))}
                </Box>

                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.1rem"
                            },
                            color: "#111827"
                        }}
                    >
                        Support
                    </Typography>
                    {supportLinkPages.map(
                        (item) => (
                            <Link
                                key={item}
                                href="#"
                                sx={{
                                    mb: 0.5,
                                    display: "block",
                                    fontSize: {
                                        xs: "0.75rem",
                                        sm: "0.875rem",
                                        md: "1rem"
                                    },
                                    color: "#4b5563",
                                    "&:hover": {
                                        color: "#00ad83"
                                    }
                                }}
                                underline="none"
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
                            mb: 1,
                            fontWeight: 600,
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.1rem"
                            },
                            color: "#111827"
                        }}
                    >
                        Follow Us
                    </Typography>
                    <Box>
                        <a href="https://www.facebook.com/anywhere.tripss" target="_blank" rel="noopener noreferrer">
                            <IconButton
                                sx={{
                                    color: "#4b5563",
                                    "&:hover": {
                                        color: "#1877F2"
                                    }
                                }}
                            >
                                <Facebook />
                            </IconButton>
                        </a>
                        <a href="https://wa.me/+918584942607" target="_blank" rel="noopener noreferrer">
                            <IconButton
                                sx={{
                                    color: "#4b5563",
                                    "&:hover": {
                                        color: "#25D366"
                                    }
                                }}
                            >
                                <WhatsApp />
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/anywhere.trips?igsh=MXd5aHd0Z3ltaTVpcw==" target="_blank" rel="noopener noreferrer">
                            <IconButton
                                sx={{
                                    color: "#4b5563",
                                    "&:hover": {
                                        color: "#E1306C"
                                    }
                                }}
                            >
                                <Instagram />
                            </IconButton>
                        </a>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    pt: 2,
                    mt: 4,
                    borderTop: "1px solid #e5e7eb",
                    textAlign: "center"
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: {
                            xs: "0.7rem",
                            sm: "0.8rem",
                            md: "0.9rem"
                        },
                        color: "#6b7280"
                    }}
                >
                    © {new Date().getFullYear()}  anywhere.trips. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};
