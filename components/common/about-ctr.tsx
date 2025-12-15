"use client"

import React, { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'

interface ExperienceCardProps {
    years?: number
    title?: string
    defaultImage?: string
    onImageChange?: (file: File) => void
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    years = 15,
    title = 'Years of Combined Team Experience',
    defaultImage,
    onImageChange,
}) => {
    const [imageUrl, setImageUrl] = useState<string | null>(defaultImage || null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }


    return (
        <div className="experience-card-wrapper  h-[400px] lg:h-[500px]">
            <div className="experience-card">
                <div
                    className="image-slot"
                    
                    style={{
                        backgroundImage:  `url(${defaultImage})` 
                    }}
                >
                </div>

                <div className="badge">
                    <div className="number">{years}</div>
                    <div className="text">{title}</div>
                </div>

               
            </div>

            <style jsx>{`
                .experience-card-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .experience-card {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: #0a1e3d;
                    overflow: visible;
                }

                .experience-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #0a1e3d;
                    clip-path: path(
                        'M 40 0 L 400 0 Q 440 0 440 40 L 440 300 Q 440 340 400 340 L 40 340 Q 0 340 0 300 L 0 40 Q 0 0 40 0 Z'
                    );
                }

                .image-slot {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                   
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

           
                .badge {
                    position: relative;
                    background: white;
                    padding: 20px 30px 30px 30px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    z-index: 10;

                    width: 50%;
                    margin-left: auto;
                    margin-top: -30px;
                    margin-right: -30px;
                    height:150px;
                    
                }

                .badge::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    clip-path: path(
                        'M 40 0 L 170 0 Q 210 0 210 40 L 210 90 Q 210 130 170 130 L 40 130 Q 0 130 0 90 L 0 40 Q 0 0 40 0 Z'
                    );
                    z-index: -1;
                }

                .number {
                    font-size: 52px;
                    font-weight: 700;
                    color: #00bcd4;
                    line-height: 0.9;
                }

                .text {
                    font-size: 13px;
                    color: #333;
                    line-height: 1.25;
                    max-width: 95px;
                    font-weight: 400;
                }
            `}</style>
        </div>
    )
}

export default ExperienceCard
