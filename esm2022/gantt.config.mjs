import { inject, Inject, InjectionToken } from '@angular/core';
import { GanttLinkLineType, GanttLinkType } from './class/link';
import { Injectable } from '@angular/core';
import { GANTT_I18N_LOCALE_TOKEN, GanttI18nLocale } from './i18n/i18n';
import zhHans from './i18n/locales/zh-hans';
import zhHant from './i18n/locales/zh-hant';
import { setDefaultTimeZone } from './utils/date';
import * as i0 from "@angular/core";
export const defaultConfig = {
    locale: GanttI18nLocale.zhHans,
    linkOptions: {
        dependencyTypes: [GanttLinkType.fs],
        showArrow: false,
        lineType: GanttLinkLineType.curve
    },
    styleOptions: {
        headerHeight: 44,
        lineHeight: 44,
        barHeight: 22
    },
    dateOptions: {
        weekStartsOn: 1
    }
};
export const GANTT_GLOBAL_CONFIG = new InjectionToken('GANTT_GLOBAL_CONFIG');
export class GanttConfigService {
    constructor(globalConfig) {
        const localeId = globalConfig.locale || defaultConfig.locale;
        this.config = {
            locale: localeId,
            dateFormat: Object.assign({}, defaultConfig.dateFormat, globalConfig.dateFormat),
            styleOptions: Object.assign({}, defaultConfig.styleOptions, globalConfig.styleOptions),
            linkOptions: Object.assign({}, defaultConfig.linkOptions, globalConfig.linkOptions),
            dateOptions: Object.assign({}, defaultConfig.dateOptions, globalConfig.dateOptions)
        };
        this.i18nLocales = inject(GANTT_I18N_LOCALE_TOKEN).reduce((result, localeConfig) => {
            result[localeConfig.id] = localeConfig; // 这里使用 `id` 作为 key
            return result;
        }, {
            ['zh-cn']: zhHans,
            ['zh-tw']: zhHant
        });
        if (this.config.dateOptions?.timeZone) {
            setDefaultTimeZone(this.config.dateOptions.timeZone);
        }
    }
    setLocale(locale) {
        this.config.locale = locale;
    }
    getLocaleConfig() {
        return this.i18nLocales[this.config.locale] ?? this.i18nLocales[this.config.locale.toLowerCase()] ?? zhHans;
    }
    getViewsLocale() {
        return this.getLocaleConfig().views;
    }
    getDateLocale() {
        return this.config.dateOptions?.locale ?? this.getLocaleConfig().dateLocale;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: GanttConfigService, deps: [{ token: GANTT_GLOBAL_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: GanttConfigService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: GanttConfigService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [GANTT_GLOBAL_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGFja2FnZXMvZ2FudHQvc3JjL2dhbnR0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFvQixhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQXlCLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5RixPQUFPLE1BQU0sTUFBTSx3QkFBd0IsQ0FBQztBQUM1QyxPQUFPLE1BQU0sTUFBTSx3QkFBd0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBc0NsRCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQXNCO0lBQzVDLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTTtJQUM5QixXQUFXLEVBQUU7UUFDVCxlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ25DLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO0tBQ3BDO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsWUFBWSxFQUFFLEVBQUU7UUFDaEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtLQUNoQjtJQUNELFdBQVcsRUFBRTtRQUNULFlBQVksRUFBRSxDQUFDO0tBQ2xCO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFvQixxQkFBcUIsQ0FBQyxDQUFDO0FBR2hHLE1BQU0sT0FBTyxrQkFBa0I7SUFLM0IsWUFBeUMsWUFBK0I7UUFDcEUsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixNQUFNLEVBQUUsUUFBUTtZQUNoQixVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDO1lBQ2hGLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDdEYsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUNuRixXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDO1NBQ3RGLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FDckQsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEVBQUU7WUFDckIsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxtQkFBbUI7WUFDM0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxFQUNEO1lBQ0ksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNO1lBQ2pCLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTTtTQUN1QyxDQUMvRCxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRU8sZUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ2hILENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUNoRixDQUFDOzhHQTdDUSxrQkFBa0Isa0JBS1AsbUJBQW1CO2tIQUw5QixrQkFBa0IsY0FETCxNQUFNOzsyRkFDbkIsa0JBQWtCO2tCQUQ5QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBTWpCLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBHYW50dExpbmtMaW5lVHlwZSwgR2FudHRMaW5rT3B0aW9ucywgR2FudHRMaW5rVHlwZSB9IGZyb20gJy4vY2xhc3MvbGluayc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHQU5UVF9JMThOX0xPQ0FMRV9UT0tFTiwgR2FudHRJMThuTG9jYWxlQ29uZmlnLCBHYW50dEkxOG5Mb2NhbGUgfSBmcm9tICcuL2kxOG4vaTE4bic7XG5pbXBvcnQgemhIYW5zIGZyb20gJy4vaTE4bi9sb2NhbGVzL3poLWhhbnMnO1xuaW1wb3J0IHpoSGFudCBmcm9tICcuL2kxOG4vbG9jYWxlcy96aC1oYW50JztcbmltcG9ydCB7IHNldERlZmF1bHRUaW1lWm9uZSB9IGZyb20gJy4vdXRpbHMvZGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FudHREYXRlRm9ybWF0IHtcbiAgICBob3VyPzogc3RyaW5nO1xuICAgIGRheT86IHN0cmluZztcbiAgICB3ZWVrPzogc3RyaW5nO1xuICAgIG1vbnRoPzogc3RyaW5nO1xuICAgIHF1YXJ0ZXI/OiBzdHJpbmc7XG4gICAgeWVhcj86IHN0cmluZztcbiAgICB5ZWFyTW9udGg/OiBzdHJpbmc7XG4gICAgeWVhclF1YXJ0ZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FudHREYXRlT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgZGF0ZU9wdGlvbnMgaXMgZGVwcmVjYXRlZCwgdXNlIGkxOG4gbG9jYWxlIHNldHRpbmcgaW5zdGVhZFxuICAgICAqIGh0dHA6Ly9nYW50dC5uZ25pY2UuY29tL2d1aWRlcy9jb25maWd1cmF0aW9uL2kxOG5cbiAgICAgKi9cbiAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgdGltZVpvbmU/OiBzdHJpbmc7XG4gICAgd2Vla1N0YXJ0c09uPzogMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW50dFN0eWxlT3B0aW9ucyB7XG4gICAgaGVhZGVySGVpZ2h0PzogbnVtYmVyO1xuICAgIGxpbmVIZWlnaHQ/OiBudW1iZXI7XG4gICAgYmFySGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbnR0R2xvYmFsQ29uZmlnIHtcbiAgICBsb2NhbGU/OiBHYW50dEkxOG5Mb2NhbGUgfCBzdHJpbmc7XG4gICAgLyoqIEBkZXByZWNhdGVkIGRhdGVGb3JtYXQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIGNvbmZpZ3VyZSB0aHJvdWdoIGkxOG4uIGh0dHA6Ly9nYW50dC5uZ25pY2UuY29tL2d1aWRlcy9jb25maWd1cmF0aW9uL2kxOG4gKi9cbiAgICBkYXRlRm9ybWF0PzogR2FudHREYXRlRm9ybWF0O1xuICAgIGRhdGVPcHRpb25zPzogR2FudHREYXRlT3B0aW9ucztcbiAgICBsaW5rT3B0aW9ucz86IEdhbnR0TGlua09wdGlvbnM7XG4gICAgc3R5bGVPcHRpb25zPzogR2FudHRTdHlsZU9wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29uZmlnOiBHYW50dEdsb2JhbENvbmZpZyA9IHtcbiAgICBsb2NhbGU6IEdhbnR0STE4bkxvY2FsZS56aEhhbnMsXG4gICAgbGlua09wdGlvbnM6IHtcbiAgICAgICAgZGVwZW5kZW5jeVR5cGVzOiBbR2FudHRMaW5rVHlwZS5mc10sXG4gICAgICAgIHNob3dBcnJvdzogZmFsc2UsXG4gICAgICAgIGxpbmVUeXBlOiBHYW50dExpbmtMaW5lVHlwZS5jdXJ2ZVxuICAgIH0sXG4gICAgc3R5bGVPcHRpb25zOiB7XG4gICAgICAgIGhlYWRlckhlaWdodDogNDQsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDQ0LFxuICAgICAgICBiYXJIZWlnaHQ6IDIyXG4gICAgfSxcbiAgICBkYXRlT3B0aW9uczoge1xuICAgICAgICB3ZWVrU3RhcnRzT246IDFcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgR0FOVFRfR0xPQkFMX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxHYW50dEdsb2JhbENvbmZpZz4oJ0dBTlRUX0dMT0JBTF9DT05GSUcnKTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBHYW50dENvbmZpZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWc6IEdhbnR0R2xvYmFsQ29uZmlnO1xuXG4gICAgcHJpdmF0ZSBpMThuTG9jYWxlczogUmVjb3JkPEdhbnR0STE4bkxvY2FsZSwgR2FudHRJMThuTG9jYWxlQ29uZmlnPjtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoR0FOVFRfR0xPQkFMX0NPTkZJRykgZ2xvYmFsQ29uZmlnOiBHYW50dEdsb2JhbENvbmZpZykge1xuICAgICAgICBjb25zdCBsb2NhbGVJZCA9IGdsb2JhbENvbmZpZy5sb2NhbGUgfHwgZGVmYXVsdENvbmZpZy5sb2NhbGU7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgbG9jYWxlOiBsb2NhbGVJZCxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcuZGF0ZUZvcm1hdCwgZ2xvYmFsQ29uZmlnLmRhdGVGb3JtYXQpLFxuICAgICAgICAgICAgc3R5bGVPcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLnN0eWxlT3B0aW9ucywgZ2xvYmFsQ29uZmlnLnN0eWxlT3B0aW9ucyksXG4gICAgICAgICAgICBsaW5rT3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZy5saW5rT3B0aW9ucywgZ2xvYmFsQ29uZmlnLmxpbmtPcHRpb25zKSxcbiAgICAgICAgICAgIGRhdGVPcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLmRhdGVPcHRpb25zLCBnbG9iYWxDb25maWcuZGF0ZU9wdGlvbnMpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pMThuTG9jYWxlcyA9IGluamVjdChHQU5UVF9JMThOX0xPQ0FMRV9UT0tFTikucmVkdWNlKFxuICAgICAgICAgICAgKHJlc3VsdCwgbG9jYWxlQ29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2xvY2FsZUNvbmZpZy5pZF0gPSBsb2NhbGVDb25maWc7IC8vIOi/memHjOS9v+eUqCBgaWRgIOS9nOS4uiBrZXlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbJ3poLWNuJ106IHpoSGFucyxcbiAgICAgICAgICAgICAgICBbJ3poLXR3J106IHpoSGFudFxuICAgICAgICAgICAgfSBhcyBSZWNvcmQ8R2FudHRJMThuTG9jYWxlIHwgc3RyaW5nLCBHYW50dEkxOG5Mb2NhbGVDb25maWc+XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRhdGVPcHRpb25zPy50aW1lWm9uZSkge1xuICAgICAgICAgICAgc2V0RGVmYXVsdFRpbWVab25lKHRoaXMuY29uZmlnLmRhdGVPcHRpb25zLnRpbWVab25lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldExvY2FsZShsb2NhbGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMb2NhbGVDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG5Mb2NhbGVzW3RoaXMuY29uZmlnLmxvY2FsZV0gPz8gdGhpcy5pMThuTG9jYWxlc1t0aGlzLmNvbmZpZy5sb2NhbGUudG9Mb3dlckNhc2UoKV0gPz8gemhIYW5zO1xuICAgIH1cblxuICAgIGdldFZpZXdzTG9jYWxlKCk6IEdhbnR0STE4bkxvY2FsZUNvbmZpZ1sndmlld3MnXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExvY2FsZUNvbmZpZygpLnZpZXdzO1xuICAgIH1cblxuICAgIGdldERhdGVMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5kYXRlT3B0aW9ucz8ubG9jYWxlID8/IHRoaXMuZ2V0TG9jYWxlQ29uZmlnKCkuZGF0ZUxvY2FsZTtcbiAgICB9XG59XG4iXX0=