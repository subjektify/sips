import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export interface Sip {
    id: string;
    title: string;
    author: string;
    created: string;
    status: string;
    type: string;
}

export interface SipsProps {
    sips?: Sip[];
}

function SipsStatusFilter({ status, setStatus }: { status: string; setStatus: (status: string) => void }): JSX.Element {
    const statusMap = {
        'All': 'All',
        'Draft': 'Draft',
        'Review': 'Review',
        'Living': 'Living',
        'Withdrawn': 'Withdrawn',
        'Final': 'Final',
        'Last Call': 'Last Call',
        'Stagnant': 'Stagnant',
    };

    return (
        <ul className="pills pills--block">
            {Object.keys(statusMap).map((key) => (
                <li
                    key={key}
                    className={clsx('pills__item', {
                        'pills__item--active': status === key,
                    })}
                    onClick={() => setStatus(key)}>
                    {statusMap[key]}
                </li>
            ))}
        </ul>
    );
}

export default function Sips({ sips }: SipsProps): JSX.Element {
    const [status, setStatus] = useState('All');

    const statusMap = {
        'Draft': <span className="badge badge--secondary">Draft</span>,
        'Review': <span className="badge badge--primary">Review</span>,
        'Living': <span className="badge badge--success">Living</span>,
        'Withdrawn': <span className="badge badge--warning">Withdrawn</span>,
        'Final': <span className="badge badge--success">Final</span>,
        'Last Call': <span className="badge badge--warning">Last Call</span>,
        'Stagnant': <span className="badge badge--danger">Stagnant</span>,
    };

    const filteredSips = status === 'All' ? sips : sips?.filter(sip => sip.status === status);

    return (
        <Layout
            title={`Core`}
            description="Subjektify Improvement Proposals">
            <main>
                <section className={styles.sips}>
                    <div className="container">
                        <SipsStatusFilter status={status} setStatus={setStatus} />
                        <div className="row">
                            {filteredSips?.map((sip) => (
                                <div key={sip.id} className="card-demo">
                                    <div className="card">
                                        <div className="card__header">
                                            <strong className='margin-right--sm'>{`SIP-${sip.id}`}</strong>
                                            {statusMap[sip.status]}
                                            <h3 className='margin-bottom--none'>{sip.title}</h3>
                                            <p>{sip.created}</p>
                                        </div>
                                        <div className="card__footer">
                                        <a href={`/docs/sips/sip-${sip.id}`} className="button button--secondary button--block">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
