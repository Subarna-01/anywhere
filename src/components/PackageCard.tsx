import * as React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

interface PackageCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({ title, description, imageUrl }) => {
    return (
        <Card
            sx={{
                minHeight: 360,
                display: "flex",
                flexDirection: "column",
                borderRadius: 0,
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                boxShadow: `
                0 2px 6px rgba(0,0,0,0.08),
                0 12px 24px rgba(0,0,0,0.06)
                `
            }}
            elevation={0}
        >
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={title}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 2.5,
                }}
            >
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexGrow: 1 }}
                >
                    {description}
                </Typography>
                <Box sx={{ mt: "auto", pt: 2 }}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            textTransform: "none",

                            borderRadius: 0,
                            py: 1.25,
                            backgroundColor: "#00ad83",
                            "&:hover": {
                                backgroundColor: "#009973",
                            },
                        }}
                    >
                        Book Now
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}