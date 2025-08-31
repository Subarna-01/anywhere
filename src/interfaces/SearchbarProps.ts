export interface SearchbarProps {
    searchQuery: string;
    countrySuggestions: string[];
    countryCodes: Record<string, string>;
    setSearchQuery: (value: string) => void;
    onSearch: () => void;
}