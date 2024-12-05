import { useState } from 'react';
import Select from 'react-select';

const Dropdowns = () => {
    
    const [timeframeOption, setTimeframeOption] = useState(null);


    const timeframeOptions = [
        { value: "last7Days", label: "Last 7 Days" },
        { value: "thisMonth", label: "This Month" },
        { value: "thisYear", label: "This Year" },
        { value: "custom", label: "Custom" }
    ]

    const peopleOptions = [
        {
            label: "GROUPS",
            options: [
                { value: "allUsers", label: "All Users", count: 400 },
                { value: "managers", label: "Managers", count: 14 },
                { value: "trainers", label: "Trainers", count: 4 }
            ]
        },
        {
            label: "USERS",
            options: [
                { value: "adrianLu", label: "Adrian lu" },
                { value: "evelynHamilton", label: "Evelyn Hamilton" }
            ]
        }
    ]

    const CustomOption = (props) => {
        const { data, isSelected, innerRef, innerProps } = props;

        return (
            <div
                ref={innerRef}
                {...innerProps}
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    cursor: "pointer",
                }}
            >
                {/* Disk Checkbox */}
                <div
                    style={{
                        height: "16px",
                        width: "16px",
                        borderRadius: "50%",
                        border: "2px solid #888",
                        backgroundColor: isSelected ? "#007BFF" : "white",
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {isSelected && (
                        <div
                            style={{
                                height: "8px",
                                width: "8px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                            }}
                        />
                    )}
                </div>
                {/* Label */}
                <span style={{ flexGrow: 1 }}>{data.label}</span>
                {/* Count */}
                {data.count !== undefined && (
                    <span style={{ fontSize: "0.85em", color: "#888" }}>({data.count})</span>
                )}
            </div>
        );
    };

    const handleChange = (timeframeOption) => {
        setTimeframeOption(timeframeOption);
    };


    return (
        <>
            <div>
                <Select
                    className='w-80'
                    defaultValue={timeframeOption}
                    onChange={handleChange}
                    options={timeframeOptions}
                    placeholder="Timeframe:"
                    isClearable={true}
                    isSearchable
                />
            </div>
            <div>
                <Select
                    className='w-80'
                    options={peopleOptions}
                    onChange={handleChange}
                    placeholder="Peoples:"
                    isMulti 
                    components={{ Option: CustomOption }}
                />
            </div>
            <div>

            </div>
        </>
    )
}
export default Dropdowns;