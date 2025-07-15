from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from can_reader import CANReader

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

can_reader = CANReader()
can_reader.start()

@app.get("/status")
def status():
    return {
        "connected": can_reader.is_connected,
        "cells": can_reader.get_cells_voltage(),
        "temps": can_reader.get_ntc_temps(),
    }
