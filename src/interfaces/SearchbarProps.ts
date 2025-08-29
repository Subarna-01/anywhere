export interface SearchbarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    countrySuggestions: string[];
    countryCodes: Record<string, string>;
    onSearch: () => void;
}