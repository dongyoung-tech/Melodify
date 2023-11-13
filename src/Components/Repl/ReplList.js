import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReplItem from "./ReplItem";

const ReplList = (props) => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.post(
                "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/repl/repl-list",
                {
                    parent: props.parent,
                    cat: props.cat,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.data.message !== "Failed") {
                setData(response.data.rows);
            }
        } catch (error) {
            console.error("Fetch failed:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.isUpdated]);

    if (data != null && data.length>0) {
        return (
            <>
                <h5>총 {data.length}개</h5>
                {data.map((item, idx) => (
                    <ReplItem item={item} key={idx} replLoad={fetchData} />
                ))}
            </>
        );
    } else {
        return <p>댓글을 작성 해보세요!</p>;
    }
};

export default ReplList;
