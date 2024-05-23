import AutoComplete from '@/components/AutoComplete';

const mockData = [
    {
        value: 225,
        label: '市场媒体合作',
    },
    {
        value: 228,
        label: '猎魔笔记',
    },
    {
        value: 1017,
        label: 'U9',
    },
    {
        value: 1169,
        label: 'UC头条',
    },
    {
        value: 1174,
        label: '知乎',
    },
    {
        value: 1309,
        label: 'taptap',
    },
    {
        value: 216,
        label: '宾谷-豌豆荚',
    },
    {
        value: 201,
        label: '金山',
    },
];

const AutoCompleteIndex = () => {
    return (
        <AutoComplete
            placeholder="选择现有名称或手动输入自定义名称"
            options={mockData}
            style={{ width: 300 }}
        />
    );
};

export default AutoCompleteIndex;
