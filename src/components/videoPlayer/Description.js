import React from 'react';
import { Link } from 'react-router-dom';
import {AiTwotoneEdit} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';

const Description = ({video:{title, date, description, id}}) => {
    return (
        <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-800">
            {title}
        </h1>
        <div className="pb-4 flex items-center space-between border-b gap-4">
            <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                Uploaded on {date}
            </h2>

            <div className="flex gap-6 w-full justify-end ">
                <div className="flex gap-1 items-center">
                    <div className="shrink-0">
                        <AiTwotoneEdit />
                    </div>
                    <Link to={`/video/edit/${id}`}>
                        <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                            Edit
                        </span>
                    </Link>
                </div>
                <div className="flex gap-1 items-center">
                    <div className="shrink-0">
                        <RiDeleteBin6Line />
                    </div>
                    <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                        Delete
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
           {description}
        </div>
    </div>
    );
};

export default Description;