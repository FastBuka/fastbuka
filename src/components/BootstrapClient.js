"use client";

import { useEffect } from "react";

function BootstrapClient() {
    useEffect(() => {
        (async () => {
            await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        })();
    }, []);

    return null;
}

export default BootstrapClient;
