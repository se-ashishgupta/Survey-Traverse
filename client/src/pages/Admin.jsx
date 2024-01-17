import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import axiosInstance from '../config/AxiosInstance';
import toast from 'react-hot-toast';

const SurveyColumn = [
    {
        name: "First Name",
        selector: (row) => row.firstName,
    },
    {
        name: "Last Name",
        selector: (row) => row.lastName,
    },
    {
        name: "Email",
        selector: (row) => row.email,
    },
    {
        name: "Mobile",
        selector: (row) => row.mobile,
    },
    {
        name: "Gender",
        selector: (row) => row.gender,
    },
    {
        name: "Country",
        selector: (row) => row.country,
    },
    {
        name: "State",
        selector: (row) => row.state,
    },
    {
        name: "City",
        selector: (row) => row.city,
    },
    {
        name: "ZipCode",
        selector: (row) => row.zipCode,
    },
    {
        name: "Address",
        selector: (row) => row.address1,
    },
    {
        name: "Message",
        selector: (row) => row.message,
    },
];

const tableCustomStyles = {
    headRow: {
        style: {
            backgroundColor: "#1f2937",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "14px",
            borderRadius: "5px",
            minHeight: "41px",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            borderBottomColor: "#42bbff",
        },
    },
    rows: {
        style: {
            backgroundColor: "#1A1E30",
            color: '#DEDCDA',
            cursor: "pointer",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            borderBottomColor: "#42bbff",
            "&:not(:last-of-type)": {
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderBottomColor: "#42bbff",
            },
        },
    },
    pagination: {
        style: {
            backgroundColor: "#1A1E30",
            color: '#DEDCDA',
        },
        button: {
            activeStyle: {
                color: "#1A1E30",
            },
            style: {
                backgroundColor: "#a2a5a571",
                color: "#1A1E30",
            },
            hoverStyle: {
                backgroundColor: "#777",
                color: '#a2a5a571',
            },

        },

    },
};



const NoDataComponent = ({ customMessage }) => (
    <div className='bg-backPrimary_color w-[100%] p-2 text-text_color1 text-center py-6 rounded-lg'>
        {customMessage || "There are no records to displays"}
    </div>
);

const CustomProgressComponenet = () => {
    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                width: "100%",
                background: "white",
                color: "black",
            }}
        >
            Loading...
        </div>
    );
};
const Admin = () => {
    const [allSurvey, setAllSurveys] = useState([]);
    const [pending, setPending] = useState(false);



    useEffect(() => {
        const getAllSurvey = async () => {
            try {
                setPending(true);
                const response = await axiosInstance({
                    method: "GET",
                    url: "/getallsurvey",
                });
                console.log(response.data);
                const { surveys } = response.data;
                if (surveys) {
                    setAllSurveys(surveys);
                }
            } catch (error) {
                toast.error(error.response.data.message);
            } finally {
                setPending(false);
            }
        };

        getAllSurvey();
    }, []);

    return (
        <div className='mt-16 min-h-[75vh] flex justify-center py-10 '>

            <div className=' w-[100%] p-2 overflow-x-auto'>
                <div className='mb-4 bg-backteritiary_color p-2 rounded-lg text-center font-bold text-text_color3  text-xl'>
                    All Survey
                </div>
                <DataTable
                    columns={SurveyColumn}
                    data={allSurvey}
                    selectableRows
                    pagination
                    responsive
                    progressPending={pending}
                    customStyles={tableCustomStyles}
                    noDataComponent={<NoDataComponent />}
                    progressComponent={<CustomProgressComponenet />}
                />
            </div>

        </div>
    );
};

export default Admin;