import React, { useState, useCallback, useEffect } from "react";
// import Image from "next/image";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from 'lucide-react';

import chartImg from "../Images/calculator page chart.png"
import logo from "../Images/Logo White.png"

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

// ProfitCalculator component
const ProfitCalculator = () => {
    const [chargerPower, setChargerPower] = useState(11.5);
    const [costPer1000, setCostPer1000] = useState(0.3);
    const [costPer3000, setCostPer3000] = useState(0.12);
    const [kwhPrice, setKwhPrice] = useState(0.49);
    const [splitPercentage, setSplitPercentage] = useState(30);
    const [hoursPerMonth, setHoursPerMonth] = useState(2);

    const [electricityCost, setElectricityCost] = useState(0);
    const [revenueEarned, setRevenueEarned] = useState(0);
    const [revenueToHost, setRevenueToHost] = useState(0);

    useEffect(() => {
        // Calculate electricity cost
        const totalKwh = chargerPower * hoursPerMonth * 30; // Assuming 30 days per month
        const cost = totalKwh <= 1000 ? totalKwh * costPer1000 : 1000 * costPer1000 + (totalKwh - 1000) * costPer3000;
        setElectricityCost(cost);

        // Calculate revenue earned
        const revenue = totalKwh * kwhPrice;
        setRevenueEarned(revenue);

        // Calculate revenue to host
        const hostRevenue = revenue * (splitPercentage / 100);
        setRevenueToHost(hostRevenue);
    }, [chargerPower, costPer1000, costPer3000, kwhPrice, splitPercentage, hoursPerMonth]);

    return (
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
                                max={0.4}
                                step={0.01}
                                formatValue={(value) => `$${value.toFixed(2)}`}
                                onValueChange={setCostPer3000}
                            />
                        </div>
                    </div>

                    <div className="calculator-section-input-group">
                        <label>Select no. of hours per charger per month</label>
                        <CustomSelect value={hoursPerMonth.toString()} onValueChange={(value) => setHoursPerMonth(Number(value))}>
                            <CustomSelectTrigger>
                                <span>{hoursPerMonth}</span>
                            </CustomSelectTrigger>
                            <CustomSelectContent>
                                {[2, 4, 6, 8].map((hours) => (
                                    <CustomSelectItem key={hours} value={hours.toString()}>{hours}</CustomSelectItem>
                                ))}
                            </CustomSelectContent>
                        </CustomSelect>
                        <span className="calculator-section-helper-text">
                            1 EV Charger 5 times per week for 4-8 hours
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
                            <div className="calculator-section-result-label">Revenue to host</div>
                        </div>
                    </div>

                    <div className="calculator-section-chart-section">
                        <p className="calculator-section-chart-description">Lorem Ipsum est du trit. Lorem Ipsum est du trit.</p>
                        <div className="calculator-section-chart-legend">
                            <div className="calculator-section-legend-color"></div>
                            <span>$ Cumulative Profit</span>
                        </div>
                        <img src={chartImg} alt="" className="calculator-section-chart-image" width={750} height={400} draggable='false' style={{ pointerEvents: 'none' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// CalculatorCard component
const CalculatorCard = () => {
    const [electricRate, setElectricRate] = useState("2");
    const [chargerType, setChargerType] = useState("level2");
    const [installationCost, setInstallationCost] = useState("0");
    const [upfrontCost, setUpfrontCost] = useState(990);

    useEffect(() => {
        // Calculate upfront cost based on selected options
        let cost = 990; // Base cost
        if (chargerType === "level3") cost += 500;
        if (installationCost === "1000") cost += 1000;
        setUpfrontCost(cost);
    }, [chargerType, installationCost]);

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
                                <label>Electric Rate ($/kWh)</label>
                                <CustomSelect value={electricRate} onValueChange={setElectricRate}>
                                    <CustomSelectTrigger>
                                        <span>{electricRate}</span>
                                    </CustomSelectTrigger>
                                    <CustomSelectContent>
                                        <CustomSelectItem value="1">1</CustomSelectItem>
                                        <CustomSelectItem value="2">2</CustomSelectItem>
                                        <CustomSelectItem value="3">3</CustomSelectItem>
                                    </CustomSelectContent>
                                </CustomSelect>
                            </div>
                            <div className="calculator-section-input-group">
                                <label>Charger Type</label>
                                <CustomSelect value={chargerType} onValueChange={setChargerType}>
                                    <CustomSelectTrigger>
                                        <span>{chargerType === "level2" ? "Level 2" : "Level 3"}</span>
                                    </CustomSelectTrigger>
                                    <CustomSelectContent>
                                        <CustomSelectItem value="level2">Level 2</CustomSelectItem>
                                        <CustomSelectItem value="level3">Level 3</CustomSelectItem>
                                    </CustomSelectContent>
                                </CustomSelect>
                            </div>
                            <div className="calculator-section-input-group">
                                <label>Installation cost per charger</label>
                                <CustomSelect value={installationCost} onValueChange={setInstallationCost}>
                                    <CustomSelectTrigger>
                                        <span>{installationCost === "0" ? "$0.0 (Installed By Host)" : "$1000 (Professional Installation)"}</span>
                                    </CustomSelectTrigger>
                                    <CustomSelectContent>
                                        <CustomSelectItem value="0">$0.0 (Installed By Host)</CustomSelectItem>
                                        <CustomSelectItem value="1000">$1000 (Professional Installation)</CustomSelectItem>
                                    </CustomSelectContent>
                                </CustomSelect>
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
                            {/* <div className="total-cost-value">${(upfrontCost / 12).toFixed(2)}</div> */}
                            <div className="calculator-section-total-cost-value">$132.00</div>
                            <div className="calculator-section-total-cost-label">Total charger cost to host per month</div>
                        </div>
                    </div>
                </div>

                <ProfitCalculator />
            </div>
        </section>
    );
};

export default CalculatorCard;

