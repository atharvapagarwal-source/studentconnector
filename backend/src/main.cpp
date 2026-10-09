#include <drogon/drogon.h>
#include <iostream>

using namespace drogon;

int main() {
    std::cout << "========================================================\n";
    std::cout << " EduPulse AI-Powered Academic Intelligence Platform      \n";
    std::cout << " C++ Drogon REST API Server                             \n";
    std::cout << "========================================================\n";

    // Set HTTP listener
    app().addListener("0.0.0.0", 8080);

    // Health check API endpoint
    app().registerHandler(
        "/api/health",
        [](const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) {
            Json::Value ret;
            ret["status"] = "online";
            ret["service"] = "EduPulse C++ Drogon Backend Engine";
            ret["version"] = "1.0.0";
            ret["timestamp"] = trantor::Date::now().toFormattedString(false);
            auto resp = HttpResponse::newHttpJsonResponse(ret);
            resp->addHeader("Access-Control-Allow-Origin", "*");
            callback(resp);
        },
        {Get}
    );

    // Run Drogon loop
    std::cout << "[INFO] EduPulse API Server listening on http://0.0.0.0:8080\n";
    app().run();
    return 0;
}
