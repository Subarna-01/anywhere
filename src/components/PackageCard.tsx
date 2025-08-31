import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import { PackageCardProps } from "../interfaces/PackageCardProps";

export const PackageCard: React.FC<PackageCardProps> = ({ id, title, description, imageUrl }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                minHeight: {
                    xs: 250,
                    sm: 320,
                    md: 360
                },
                display: "flex",
                flexDirection: "column",
                borderRadius: 0,
                transition: "all 0.3s ease",
                boxShadow: `
                0 2px 6px rgba(0,0,0,0.08),
                0 12px 24px rgba(0,0,0,0.06)
                `,
                backgroundColor: "#ffffff"
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
                    p: 2.5,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        mb: 1,
                        fontWeight: 600,
                        fontSize: {
                            xs: "0.9rem",
                            sm: "1rem",
                            md: "1.1rem"
                        },
                        lineHeight: 1.3
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        flexGrow: 1,
                        fontSize: {
                            xs: "0.7rem",
                            sm: "0.8rem",
                            md: "0.85rem"
                        },
                        lineHeight: 1.5
                    }}
                    color="text.secondary"
                >
                    {description}
                </Typography>
                <Box sx={{ pt: 2, mt: "auto" }}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 1.25,
                            fontSize: {
                                xs: "0.7rem",
                                sm: "0.8rem",
                                md: "0.9rem",
                            },
                            backgroundColor: "#00ad83",
                            "&:hover": {
                                backgroundColor: "#009973"
                            }
                        }}
                        onClick={() => navigate(`/package/${id}`)}
                    >
                        Learn More
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}