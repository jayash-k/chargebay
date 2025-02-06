import React, { useState, useCallback, useEffect } from "react";
// import Image from "next/image";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from 'lucide-react';

import chartImg from "../Images/calculator page chart.png"
import logo from "../Images/Logo White.png"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";


// CustomSlider component (unchanged)
const CustomSlider = ({
    defaultValue = 0,
    max = 100,
    step = 1,
    formatValue = (value) => value.toString(),
    onValueChange,
    className,
}) => {
    const [value, setValue] = useState(defaultValue);

    const handleValueChange = useCallback((values) => {
        const newValue = values[0];
        setValue(newValue);
        onValueChange?.(newValue);
    }, [onValueChange]);

    return (
        <div className="calculator-section-custom-slider">
            <SliderPrimitive.Root
                defaultValue={[defaultValue]}
                max={max}
                step={step}
                onValueChange={handleValueChange}
                className={`calculator-section-slider-root ${className}`}
            >
                <SliderPrimitive.Track className="calculator-section-slider-track">
                    <SliderPrimitive.Range className="calculator-section-slider-range" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="calculator-section-slider-thumb" />
            </SliderPrimitive.Root>
            <span className="calculator-section-slider-value">{formatValue(value)}</span>
        </div>
    );
};

// CustomSelect components (unchanged)
const CustomSelect = SelectPrimitive.Root;

const CustomSelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={`calculator-section-custom-select-trigger ${className}`}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className="calculator-section-select-icon" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));

const CustomSelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={`calculator-section-custom-select-content ${className}`}
            position={position}
            {...props}
        >
            <SelectPrimitive.Viewport className="calculator-section-custom-select-viewport">
                {children}
            </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));

const CustomSelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={`calculator-section-custom-select-item ${className}`}
        {...props}
    >
        <span className="calculator-section-custom-select-item-indicator">
            <SelectPrimitive.ItemIndicator>
                <ChevronDown className="calculator-section-select-item-icon" />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));



// CalculatorCard component
const CalculatorCard = () => {
    const [numChargers, setNumChargers] = useState(2);
    const [installationCost, setInstallationCost] = useState(0);
    const [chargerType, setChargerType] = useState("level2");
    const [monthlyCost, setMonthlyCost] = useState(45);
    const [upfrontCost, setUpfrontCost] = useState(0);

    useEffect(() => {
        let costPerMonth = (chargerType === "level2" ? 45 : 50);
        setMonthlyCost(costPerMonth);
    }, [chargerType]);

    useEffect(() => {
        let totalUpfrontCost = (numChargers * monthlyCost * 10) + installationCost;
        setUpfrontCost(totalUpfrontCost);
    }, [numChargers, monthlyCost, installationCost]);



    const [chargerPower, setChargerPower] = useState(11.50);
    const [costPer1000, setCostPer1000] = useState(0.13);
    const [costPer3000, setCostPer3000] = useState(0.12);
    const [kwhPrice, setKwhPrice] = useState(0.35);
    const [splitPercentage, setSplitPercentage] = useState(30);
    const [hoursPerMonth, setHoursPerMonth] = useState(50);

    const [electricityCost, setElectricityCost] = useState(0);
    const [revenueEarned, setRevenueEarned] = useState(0);
    const [revenueToHost, setRevenueToHost] = useState(0);

    useEffect(() => {
        // Calculate electricity cost
        const totalKwh = chargerPower * hoursPerMonth * 30;
        const cost = totalKwh <= 1000 ? totalKwh * costPer1000 : 1000 * costPer1000 + (totalKwh - 1000) * costPer3000;
        setElectricityCost(150);

        let consumedKwh = numChargers * chargerPower * hoursPerMonth;

        // Calculate revenue earned
        const revenue = kwhPrice * hoursPerMonth * chargerPower * numChargers;
        setRevenueEarned(revenue);

        // Calculate revenue to host
        const hostRevenue = revenue * (splitPercentage / 100);
        setRevenueToHost(hostRevenue);
    }, [chargerPower, costPer1000, costPer3000, kwhPrice, splitPercentage, hoursPerMonth, numChargers]);


    return (
        <section className="calculator-section-calculator-section">
            <div className="calculator-section-calculator-card">
                <img src={logo} alt="" className="calculator-section-logo" />
                <div className="calculator-section-subscription-calculator">
                    <h1 className="calculator-section-section-title">
                        Charger Monthly Subscription Calculator
                    </h1>
                    <div className="calculator-section-input-grid-container">
                        <div className="calculator-section-input-grid">
                            <div className="calculator-section-input-group">
                                <label>No of Chargers</label>
                                <input
                                    type="number"
                                    value={numChargers}
                                    maxLength={2}
                                    onChange={(e) => setNumChargers(e.target.value)}
                                    className="calculator-section-text-input"
                                />
                            </div>
                            <div className="calculator-section-input-group">
                                <label>Charger Type</label>
                                <select
                                    value={chargerType}
                                    onChange={(e) => setChargerType(e.target.value)}
                                    className="calculator-section-text-input"
                                >
                                    <option value="level2">Level 2 - 9.6kW/12kW ($45/month)</option>
                                    <option value="level2rfid">Level 2 - 9.6kW/12kW (RFID) ($50/month)</option>
                                </select>
                            </div>
                            <div className="calculator-section-input-group">
                                <label>Installation cost per charger</label>
                                <select
                                    value={installationCost}
                                    onChange={(e) => setInstallationCost(Number(e.target.value))}
                                    className="calculator-section-text-input"
                                >
                                    <option value={0}>$0.0 (Installed By Host)</option>
                                    <option value={2000}>$2000 (Professional Installation)</option>
                                </select>
                            </div>
                            <div className="calculator-section-input-group">
                                <label>Cost if paid upfront per year</label>
                                <input
                                    type="text"
                                    value={`$${upfrontCost.toFixed(2)}`}
                                    className="calculator-section-text-input"
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="calculator-section-total-cost">
                            <div className="calculator-section-total-cost-value">${(numChargers * monthlyCost).toFixed(2)}</div>
                            <div className="calculator-section-total-cost-label">Total charger cost to host per month</div>
                        </div>
                    </div>
                </div>


                <div className="calculator-section-profit-calculator">
                    <h2 className="calculator-section-section-title">
                        Electricity Cost + Profit Per Charger Calculator
                    </h2>

                    <div className="calculator-section-calculator-grid">
                        <div className="calculator-section-calculator-inputs">
                            <div className="calculator-section-input-group">
                                <label>Charger Power Output (kWh)</label>
                                <CustomSlider
                                    defaultValue={chargerPower}
                                    max={20}
                                    step={0.1}
                                    formatValue={(value) => value.toFixed(2)}
                                    onValueChange={setChargerPower}
                                />
                            </div>

                            <div className="calculator-section-input-group">
                                <h3>Input Your Electricity Cost</h3>
                                <div className="calculator-section-sub-input-group">
                                    <label>Cost Per kWh up to 1000 kWh</label>
                                    <CustomSlider
                                        defaultValue={costPer1000}
                                        max={1}
                                        step={0.01}
                                        formatValue={(value) => `$${value.toFixed(2)}`}
                                        onValueChange={setCostPer1000}
                                    />
                                </div>

                                <div className="calculator-section-sub-input-group">
                                    <label>Cost per kWh up to 3000 kWh</label>
                                    <CustomSlider
                                        defaultValue={costPer3000}
                                        max={1}
                                        step={0.01}
                                        formatValue={(value) => `$${value.toFixed(2)}`}
                                        onValueChange={setCostPer3000}
                                    />
                                </div>
                            </div>

                            <div className="calculator-section-input-group">
                                <label>Input no. of hours per charger per month</label>
                                <input
                                    type="number"
                                    value={hoursPerMonth}
                                    onChange={(e) => setHoursPerMonth(e.target.value)}
                                    className="calculator-section-text-input"
                                />
                                <span className="calculator-section-helper-text">
                                    1 EV Charges 5 times per week for 4-8 hours (e.g: 40 hours per week)
                                </span>
                            </div>

                            <div className="calculator-section-input-group">
                                <label>
                                    kWh price to consumer <span className="calculator-section-recommended">(recommended $0.35)</span>
                                </label>
                                <CustomSlider
                                    defaultValue={kwhPrice}
                                    max={1}
                                    step={0.01}
                                    formatValue={(value) => `$${value.toFixed(2)}`}
                                    onValueChange={setKwhPrice}
                                />
                            </div>

                            <div className="calculator-section-input-group">
                                <label>Split % earned by Host</label>
                                <CustomSlider
                                    defaultValue={splitPercentage}
                                    max={100}
                                    step={1}
                                    formatValue={(value) => `${value}%`}
                                    onValueChange={setSplitPercentage}
                                />
                            </div>
                        </div>

                        <div className="calculator-section-calculator-results">
                            <div className="calculator-section-result-cards">
                                <div className="calculator-section-result-card">
                                    <div className="calculator-section-result-value">${electricityCost.toFixed(2)}</div>
                                    <div className="calculator-section-result-label">Cost of Electricity to host</div>
                                </div>
                                <div className="calculator-section-result-card">
                                    <div className="calculator-section-result-value">${revenueEarned.toFixed(2)}</div>
                                    <div className="calculator-section-result-label">Revenue earned</div>
                                </div>
                                <div className="calculator-section-result-card">
                                    <div className="calculator-section-result-value">${revenueToHost.toFixed(2)}</div>
                                    <div className="calculator-section-result-label">Gross Profit to host</div>
                                </div>
                            </div>

                            <div className="calculator-section-chart-section">
                                <p className="calculator-section-chart-description">Gross Profit to host
                                    Y-o-Y gross profit collection for host</p>
                                <div className="calculator-section-chart-legend">
                                    <div className="calculator-section-legend-color"></div>
                                    <span>$ Cumulative Profit</span>
                                </div>
                                <CustomBarChart profit={revenueToHost.toFixed(2)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



const CustomBarChart = ({ profit }) => {
    const calculateProfit = (year) => {
        if (year === 1) return profit * 12;
        return 2 * calculateProfit(year - 1) + 0.1 * calculateProfit(year - 1);
    };

    const data = Array.from({ length: 5 }, (_, i) => ({
        year: (i + 1).toString(),
        value: calculateProfit(i + 1),
    }));

    const renderCustomizedLabel = (props) => {
        const { x, y, width, value } = props;
        return (
            <text
                x={x + width / 2}
                y={y + 20}
                fill="white"
                textAnchor="middle"
                fontSize={14}
                fontWeight="bold"
            >
                {`${(value / 1000).toFixed(1)} K`} {/* Converts value to thousands (K) */}
            </text>
        );
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: "#00060e", padding: "10px", borderRadius: "5px", color: "white" }}>
                    <p>{`Year : ${label}`}</p>
                    <p>{`Profit : ${(payload[0].value / 1000).toFixed(1)} K`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="calculator-section-chart-section-chart" style={{ height: 400, backgroundColor: "#00060e" }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: -15, bottom: 5 }}
                    barGap={50}
                    barCategoryGap="25%"
                >
                    <CartesianGrid horizontal vertical={false} stroke="#1e2a38" strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fill: "#ffffff", fontSize: 14 }} />
                    <YAxis
                        tick={{ fill: "#ffffff", fontSize: 14 }}
                        domain={[0, Math.max(...data.map(d => d.value)) + 1000]} // Adjusting scale dynamically
                        tickFormatter={(tick) => `${(tick / 1000).toFixed(1)} K`} // Displaying in K format
                    />
                     <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="value"
                        fill="#1a3151"
                        stroke="#0166ff"
                        strokeWidth={2}
                        radius={[9, 9, 9, 9]}
                        barSize={100}
                        label={renderCustomizedLabel}
                    />
                    <text
                        x="50%"
                        y="100%"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize={16}
                        fontWeight="bold"
                    >
                        Years
                    </text>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CalculatorCard;

