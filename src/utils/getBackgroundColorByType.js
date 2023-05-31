export const getBackgroundColorByType = (type) => {
    switch (type) {
        case 'normal':
            return '{{background-color: #A8A77A;}}';
        case 'fire':
            return '{{background-color: #EE8130}}';
    }
}