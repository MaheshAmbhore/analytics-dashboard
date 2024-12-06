import { useEffect, useState } from 'react';
import Select from 'react-select';

const Dropdowns = () => {
    
    const [timeframeOption, setTimeframeOption] = useState(null);
    const [topicOption, setTopicOption] = useState(null);

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

    const topicOptions = [
        {value: "all", label: "All"},
        {value: "foodSafety", label: "Food Safety"},
        {value: "complianceBasicsProcedures", label: "Compliance Basics Procedures"},
        {value: "companyNetworking", label: "Company Networking"},
        {value: "covidProtocols", label: "Covid Protocols"},
        {value: "cyberSecurityBasics", label: "Cyber Security Basics"},
        {value: "socialMediaPolicies", label: "Social Media Policies"},
    ]
    const handleChange = (timeframeOption) => {
        setTimeframeOption(timeframeOption);
    };
    const handleTopicChange = (topicOption) => {
        setTopicOption(topicOption);
    };

    return (
        <div className='grid grid-cols-3 gap-3'>
            <div>
                <Select
                    className=''
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
                    className=''
                    options={peopleOptions}
                    onChange={handleChange}
                    placeholder="Peoples:"
                    isMulti 
                    components={{ Option: CustomOption }}
                />
            </div>
            <div>
            <Select
                    className=''
                    defaultValue={topicOption}
                    onChange={handleTopicChange}
                    options={topicOptions}
                    placeholder="Topic:"
                    isClearable={true}
                    isSearchable
                />
            </div>
        </div>
    )
}
export default Dropdowns;