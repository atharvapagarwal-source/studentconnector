cmake_minimum_required(VERSION 3.15)
project(EduPulseBackend CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Find Drogon package
find_package(Drogon REQUIRED)
find_package(Jsoncpp REQUIRED)

# Include directories
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/src)

# Collect source files
file(GLOB_RECURSE SRC_FILES
    "src/*.cpp"
    "src/*.h"
)

add_executable(edupulse_server ${SRC_FILES})

target_link_libraries(edupulse_server
    PRIVATE
    Drogon::Drogon
    Jsoncpp::Jsoncpp
)

message(STATUS "EduPulse C++ Drogon Backend Configuration Complete.")
