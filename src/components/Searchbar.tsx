import * as React from "react";
import { Box, IconButton, TextField, Autocomplete, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { SearchbarProps } from "../interfaces/SearchbarProps";

export const Searchbar: React.FC<SearchbarProps> = ({ searchQuery, countrySuggestions, countryCodes, setSearchQuery, onSearch }) => {
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
                            // borderRadius: 0
                        }}
                    >
                        {children}
                    </Paper>
                )}
                renderInput={(params) => (
                    <Box
                        sx={{
                            width: "100%",
                            position: "relative"
                        }}
                    >
                        <TextField
                            {...params}
                            placeholder="Search destinations"
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                sx: {
                                    paddingRight: "96px",
                                    boxShadow: "0 16px 60px 8px rgba(0, 0, 0, 0.35)",
                                    // backdropFilter: "blur(10px)",
                                    // WebkitBackdropFilter: "blur(10px)",
                                    borderRadius: 10,
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
                                    },
                                    backgroundColor: "#ffffff"
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
                                size="small"
                                sx={{
                                    height: {
                                        xs: 32,
                                        sm: 36,
                                        md: 40
                                    },
                                    width: {
                                        xs: 32,
                                        sm: 36,
                                        md: 40
                                    },
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                    borderRadius: "50%",
                                    visibility: searchQuery ? "visible" : "hidden",
                                    pointerEvents: searchQuery ? "auto" : "none",
                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                    "&:hover": {
                                        backgroundColor: "rgba(240, 240, 240, 0.9)"
                                    }
                                }}
                                onClick={() => setSearchQuery("")}
                            >
                                <ClearIcon
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            sm: "1.2rem",
                                            md: "1.3rem"
                                        }
                                    }}
                                />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    height: {
                                        xs: 32,
                                        sm: 36,
                                        md: 40
                                    },
                                    width: {
                                        xs: 32,
                                        sm: 36,
                                        md: 40
                                    },
                                    pointerEvents: "auto",
                                    color: "#ffffff",
                                    backgroundColor: "#00ad83",
                                    "&:hover": {
                                        backgroundColor: "#008966"
                                    },
                                }}
                                onClick={onSearch}
                            >
                                <SearchIcon
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            sm: "1.2rem",
                                            md: "1.3rem"
                                        }
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
