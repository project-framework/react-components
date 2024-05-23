// * 可选择、可手动输入的输入框
// * 支持 Form 表单
// * 相比 Antd 的 AutoComplete ，在选中选项时，支持输入框中显示 label 而不是 value。
// * 由 Antd 的 Select + showSearch 搜索框改编而来，重写 input 逻辑，当输入内容不匹配时，不会清空输入框。
// * @see https://4x-ant-design.antgroup.com/components/select-cn/#components-select-demo-search-box

import { useState, CSSProperties } from 'react';
import { Select, Spin } from 'antd';
import { debounce } from 'lodash-es';

interface SelectProps {
    value: string; // 受控的value
    placeholder: string;
    style: CSSProperties;
    loading: boolean;
    onChange: (...arg: any[]) => void; // 提供的 onChange 事件
    options: { label: string; value: string | number }[];
}

const AutoComplete = ({
    value = '',
    onChange = () => {}, // form 表单接收的值
    placeholder = '',
    options = [],
    loading = false,
    style = {},
}: SelectProps) => {
    const [input, setInput] = useState(value);

    // 重写输入逻辑：如果从 options 中匹配到，则返回 value，否则返回输入的值
    const handleInput = debounce(e => {
        const value = e.target.value;
        const selected = options.find(
            item => item?.label.toLocaleLowerCase() === value.toLocaleLowerCase()
        );
        if (selected) {
            setInput(selected.label);
            onChange(selected.value);
        } else {
            setInput(value);
            onChange(value);
        }
    }, 500);

    const handleSelect = (value: string, option: { label: string; value: string | number }) => {
        // 避免重复的 form onChange 事件
        // 场景：输入框手动输入相匹配的值，又在下拉框中选择了该项，此时无需再重复触发
        if (input !== option.label) {
            setInput(option.label);
            onChange(value);
        }
    };

    return (
        <Select
            value={input}
            showSearch
            placeholder={placeholder}
            style={style}
            defaultActiveFirstOption={false}
            // showArrow={false}
            loading={loading}
            notFoundContent={loading ? <Spin size="small" /> : null}
            options={options}
            filterOption={(inputValue, option) => {
                const label = option?.label.toLocaleLowerCase();
                const input = inputValue.toLocaleLowerCase();
                return label ? label.indexOf(input) !== -1 : false;
            }}
            onSelect={handleSelect}
            onInput={handleInput}
        />
    );
};

export default AutoComplete;
