import React from "react";
import "./page.css";

/**
 * Шаблон страницы приложения.
 */
export class Page extends React.Component {

    get Header() {
        return <div/>;
    }
    
    get Content() {
        return <div/>;
    }
    
    get Footer() {
        return <div/>;
    }

    /**
     * Шаблонный метод отрисовки страницы приложения.
     */
    render() {
        return (
            <div className="page">
                <div className="page-header">
                    {this.Header}
                </div>
                <div className="page-content">
                    {this.Content}
                </div>
                <div className="page-footer">
                    {this.Footer}
                </div>
            </div>
        );
    }
}