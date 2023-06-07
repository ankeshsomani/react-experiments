import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    InputLabel,
    Select,
    DialogTitle,
    FormControl,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
} from '@mui/material';
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Delete, Edit } from '@mui/icons-material';
import { data, categories } from './makeData.ts';
import Navbar from './Navbar';

const ListExpenseMui = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState(() => data);
    const [validationErrors, setValidationErrors] = useState({});

    const baseUrl = "http://localhost:8082/api/expenses";


    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setTableData(response.data);
        });
    }, []);


    const handleCreateNewRow = (values) => {
        tableData.push(values);
        console.log(JSON.stringify(values));
        const callRealBackend = true;
        if (callRealBackend) {
            axios
                .post(baseUrl, {
                    expensedate: values.expensedate,
                    category: values.category,
                    description: values.description,
                    amount: values.amount,
                })
                .then((response) => {
                    toast.success("Success!", {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                });
        }
        setTableData([...tableData]);
    };

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;
           // console.log('--REYANSH---'+JSON.stringify(values));
            const updateUrl = baseUrl + "/" + values.id;
            axios.put(
                updateUrl,
                values
              );
            //send/receive api updates here, then refetch or update local table data for re-render
            setTableData([...tableData]);
            exitEditingMode(); //required to exit editing mode and close modal
        }
    };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row) => {
            if (
                !window.confirm(`Are you sure you want to delete ${row.getValue('description')}`)
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
            var idToDelete = row.getValue('id');
            const deleteUrl = baseUrl + "/" + idToDelete;
            axios.delete(
                deleteUrl
              );
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData],
    );

    const getCommonEditTextFieldProps = useCallback(
        (cell) => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'age'
                                ? validateAge(+event.target.value)
                                : validateRequired(event.target.value);
                    if (!isValid) {
                        //set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`,
                        });
                    } else {
                        //remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                },
            };
        },
        [validationErrors],
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 80,
            },
            {
                accessorKey: 'expensedate',
                header: 'Expense Date',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
                type: 'string',
            },
            {
                accessorKey: 'amount',
                header: 'Expense Amount',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
                type: 'date',
            },
            {
                accessorKey: 'description',
                header: 'Expense Description',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'text',
                }),
            },
            {
                accessorKey: 'category',
                header: 'Expense Category',
                muiTableBodyCellEditTextFieldProps: {
                    select: true, //change to select for a dropdown
                    children: categories.map((state) => (
                        <MenuItem key={state} value={state}>
                            {state}
                        </MenuItem>
                    )),
                },
                type: 'select',
            },
        ],
        [getCommonEditTextFieldProps],
    );

    return (
        <>
        <Navbar/>
            <MaterialReactTable
                displayColumnDefOptions={{
                    'mrt-row-actions': {
                        muiTableHeadCellProps: {
                            align: 'center',
                        },
                        size: 120,
                    },
                }}
                columns={columns}
                data={tableData}
                editingMode="modal" //default
                enableColumnOrdering
                enableEditing
                onEditingRowSave={handleSaveRowEdits}
                onEditingRowCancel={handleCancelRowEdits}
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement="left" title="Edit">
                            <IconButton onClick={() => table.setEditingRow(row)}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="right" title="Delete">
                            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
                renderTopToolbarCustomActions={() => (
                    <Button
                        color="secondary"
                        onClick={() => setCreateModalOpen(true)}
                        variant="contained"
                    >
                        Create New Expense
                    </Button>
                )}
            />
            <CreateNewExpenseModal
                columns={columns}
                open={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
                onSubmit={handleCreateNewRow}
            />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewExpenseModal = ({ open, columns, onClose, onSubmit }) => {
    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {}),
    );

    const [datePickerValue, setDatePickerValue] = useState();

    const handleSubmit = () => {
        //put your validation logic here
        onSubmit(values);
        onClose();
    };
    const expenseDateAccessorKey = 'expensedate';
    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Create New Expense</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {columns.map((column) => {
                            console.log('*****************L-' + column.accessorKey);
                            if (column.accessorKey === 'category') {
                                console.log('in category ****')
                                console.log(JSON.stringify(categories));
                                return (
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            key={column.accessorKey}
                                            label={column.header}
                                            name={column.accessorKey}
                                            onChange={(e) =>
                                                setValues({ ...values, [e.target.name]: e.target.value })
                                            }
                                        >
                                            {categories.map((category) => {
                                                return (
                                                    <MenuItem key={category} value={category}>{category}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                );
                            }
                            if (column.accessorKey === 'expensedate') {
                                return (
                                    <TextField
                                        type='date'
                                        key={column.accessorKey}
                                        name={column.accessorKey}
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                );
                            }
                            if (column.accessorKey === 'amount') {
                                return (
                                    <TextField
                                        type='number'
                                        key={column.accessorKey}
                                        label={column.header}
                                        name={column.accessorKey}
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                )
                            }
                            else {
                                return (
                                    <>
                                        <TextField
                                            key={column.accessorKey}
                                            label={column.header}
                                            name={column.accessorKey}
                                            onChange={(e) =>
                                                setValues({ ...values, [e.target.name]: e.target.value })
                                            }
                                        />

                                    </>

                                )
                            }
                        })}
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Create New Expense
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
const validateAge = (age) => age >= 18 && age <= 50;

export default ListExpenseMui;
