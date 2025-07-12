import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';

export default function OrderOnlinePage() {
    const pricing = [
        {
            id: 1,
            title: 'Starter',
            price: 0, // Free plan
            user: 1, // One location
            features: [
                'Basic order management',
                'Dashboards and analytics',
                'One location support',
            ],
        },
        {
            id: 2,
            title: 'Pro',
            price: 49, // Monthly price
            user: 10, // One location
            features: [
                'All Starter features',
                'Advanced inventory',
                'Staff scheduling and tracking',
            ],
        },
    ];

    return (
        <>
            {/* Start */}

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="pricing">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                            Order Online System
                        </h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                            Your own system right today!
                        </h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            {` Whether you're just starting out or running multiple locations, we have
                            a flexible solution for you. Prices are subject to change, but we’re
                            here to help you find the perfect fit.`}
                        </p>
                    </div>

                    <div className="relative mt-10 flex items-center justify-center">
                        <a
                            href="https://mixue.koacook.com/"
                            target="_blank"
                            className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md"
                        >
                            Visit Demo!
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
