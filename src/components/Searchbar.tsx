import * as React from "react";
import { Box, IconButton, TextField, Autocomplete, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchbarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    countrySuggestions: string[];
    countryCodes: Record<string, string>;
}

export const Searchbar: React.FC<SearchbarProps> = ({ searchQuery, setSearchQuery, countrySuggestions, countryCodes }) => {
    return (
        <Box
            sx={{
                width: {
                    xs: "90%",
                    sm: "70%",
                    md: "50%",
                    lg: "40%"
                },
                mt: 3.5
            }}
        >
            <Autocomplete
                freeSolo
                options={countrySuggestions}
                renderOption={(props, option) => {
                    const code = countryCodes[option];
                    return (
                        <li
                            {...props}
                            style={{
                                gap: 8,
                                display: "flex",
                                alignItems: "center",
                                fontSize: window.innerWidth < 600 ? "0.85rem" : window.innerWidth < 900 ? "0.95rem" : "1rem"
                            }}
                        >
                            <img
                                width={window.innerWidth < 600 ? "18" : window.innerWidth < 900 ? "22" : "24"}
                                loading="lazy"
                                src={`https://flagcdn.com/w40/${code}.png`}
                                srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
                                alt={`${option} flag`}
                            />
                            {option}
                        </li>
                    );
                }}
                inputValue={searchQuery}
                onInputChange={(_, value) => setSearchQuery(value)}
                PaperComponent={({ children }) => (
                    <Paper
                        sx={{
                            borderRadius: 0
                        }}
                    >
                        {children}
                    </Paper>
                )}
                renderInput={(params) => (
                    <Box sx={{ width: "100%", position: "relative" }}>
                        <TextField
                            {...params}
                            placeholder="Search destinations..."
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                sx: {
                                    paddingRight: "96px",
                                    borderRadius: 10,
                                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                    fontSize: {
                                        xs: "0.85rem",
                                        sm: "0.95rem",
                                        md: "1rem"
                                    },
                                    "& fieldset": {
                                        border: "none",
                                    },
                                    "&:focus-within fieldset": {
                                        border: "none",
                                    },
                                    "&:focus-within": {
                                        outline: "none",
                                    }
                                },
                                endAdornment: null
                            }}
                        />
                        <Box
                            sx={{
                                width: 80,
                                gap: 1,
                                position: "absolute",
                                top: "50%",
                                right: 8,
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                pointerEvents: "none",
                                transform: "translateY(-50%)"
                            }}
                        >
                            <IconButton
                                onClick={() => setSearchQuery("")}
                                size="small"
                                sx={{
                                    height: { xs: 32, sm: 36, md: 40 },
                                    width: { xs: 32, sm: 36, md: 40 },
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                    "&:hover": {
                                        backgroundColor: "rgba(240, 240, 240, 0.9)"
                                    },
                                    visibility: searchQuery ? "visible" : "hidden",
                                    pointerEvents: searchQuery ? "auto" : "none"
                                }}
                            >
                                <ClearIcon
                                    sx={{
                                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" }
                                    }}
                                />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    height: { xs: 32, sm: 36, md: 40 },
                                    width: { xs: 32, sm: 36, md: 40 },
                                    color: "#ffffff",
                                    backgroundColor: "#00ad83",
                                    "&:hover": {
                                        backgroundColor: "#008966",
                                    },
                                    pointerEvents: "auto"
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" }
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                )}
            />
        </Box>
    );
}
