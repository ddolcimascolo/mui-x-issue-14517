import {findAllByRole, getAllByRole, render, screen} from "@testing-library/react";
import {DataGrid} from "@mui/x-data-grid";

describe('MUI DataGrid v7.16.0', function() {

    it('should render', async function() {
        const columns = [
            {
                field: "id",
            },
        ];
        const rows = [
            {
                id: 1,
            },
        ];

        render(
            <DataGrid columns={columns} rows={rows} />
        )

        const grid = await screen.findByRole('grid');

        expect(getAllByRole(grid, 'columnheader')).toHaveLength(columns.length);
    })

})
