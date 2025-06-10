// Grid Layout Configuration
const gridConfig = {
    container: 'grid-container',
    items: 12, // Number of grid items
    columns: 3, // Default number of columns
    gap: '20px', // Gap between grid items
    colors: [
        '#3b82f6', // blue-500
        '#8b5cf6', // violet-500
        '#ec4899', // pink-500
        '#10b981', // emerald-500
        '#f59e0b', // amber-500
        '#ef4444'  // red-500
    ]
};

// Initialize the grid
function initGrid() {
    const container = document.createElement('div');
    container.id = gridConfig.container;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridConfig.columns}, 1fr)`;
    container.style.gap = gridConfig.gap;
    container.style.padding = '20px';
    container.style.maxWidth = '1200px';
    container.style.margin = '0 auto';

    // Create grid items
    for (let i = 0; i < gridConfig.items; i++) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.textContent = `Item ${i + 1}`;
        item.style.backgroundColor = gridConfig.colors[i % gridConfig.colors.length];
        item.style.color = 'white';
        item.style.padding = '2rem';
        item.style.borderRadius = '8px';
        item.style.display = 'flex';
        item.style.justifyContent = 'center';
        item.style.alignItems = 'center';
        item.style.fontWeight = 'bold';
        item.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
        item.style.cursor = 'pointer';
        
        // Add hover effect
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
        
        container.appendChild(item);
    }

    // Add controls
    const controls = document.createElement('div');
    controls.style.margin = '20px 0';
    controls.style.display = 'flex';
    controls.style.justifyContent = 'center';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';

    const columnsLabel = document.createElement('label');
    columnsLabel.textContent = 'Columns: ';
    columnsLabel.style.marginRight = '10px';
    controls.appendChild(columnsLabel);

    const columnInput = document.createElement('input');
    columnInput.type = 'number';
    columnInput.min = '1';
    columnInput.max = '6';
    columnInput.value = gridConfig.columns;
    columnInput.style.width = '60px';
    columnInput.style.padding = '5px';
    columnInput.style.borderRadius = '4px';
    columnInput.style.border = '1px solid #ccc';

    columnInput.addEventListener('change', (e) => {
        const newColumns = Math.min(6, Math.max(1, parseInt(e.target.value) || 1));
        container.style.gridTemplateColumns = `repeat(${newColumns}, 1fr)`;
    });
    
    controls.appendChild(columnInput);

    // Add to body
    document.body.insertBefore(controls, document.body.firstChild);
    document.body.insertBefore(container, document.body.firstChild);
}

// Initialize the grid when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGrid);
