import React, { useState, useEffect, ChangeEvent } from 'react';
import {API_URL, Users} from "../const/Users";

interface AutoCompleteProps {
    data: string[]; // Array of data options
    onSelect: (selectedItem: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ data, onSelect }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredData, setFilteredData] = useState<string[]>([]);
    //Real Data
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response: Response = await fetch(API_URL);
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             // Extract the names from the API response
    //             const names = data.map((user: Users) => user.name);
    //             // Filter data based on input value
    //             const filtered = names.filter((name: string) =>
    //                 name.toLowerCase().includes(inputValue.toLowerCase())
    //             );
    //             setFilteredData(filtered);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //
    //     fetchData();
    // }, [inputValue]);


    //Dummy JSON example
    useEffect(() => {
        // Simulate an asynchronous data fetch (e.g., like a REST call)
        const fetchData = async () => {
            // Simulate a delay
            await new Promise((resolve) => setTimeout(resolve, 500));
            // Filter data based on input value
            const filtered = data.filter((item) =>
                item.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredData(filtered);
        };

        fetchData();
    }, [inputValue, data]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleItemClick = (item: string) => {
        setInputValue(item);
        setFilteredData([]);
        onSelect(item);
    };

    return (
        <div className="autocomplete">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type to search..."
            />
            {
                filteredData.map((item) => (
                <ul className="autocomplete-list">
                    {
                        filteredData.length > 0 ? filteredData.map((item) => (
                            <li key={item} onClick={() => handleItemClick(item)}>
                                {item}
                            </li>
                        )) : <li className="autocomplete-list_not-selectable"><i>No data selected</i></li>
                    }
                </ul>
                ))
            }
        </div>
    );
};

export default AutoComplete;